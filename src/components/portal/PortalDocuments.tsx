"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  addDocument,
  listDocuments,
  removeDocument,
  formatBytes,
  formatDate,
  DOC_CATEGORIES,
  type PortalDocument,
} from "@/lib/portal-store";
import { DocChip, PortalCard } from "./ui";

const ACCEPT = ".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.xls,.xlsx,.zip";

export default function PortalDocuments() {
  const [docs, setDocs] = useState<PortalDocument[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [category, setCategory] = useState<string>(DOC_CATEGORIES[0]);
  const inputRef = useRef<HTMLInputElement>(null);
  const replaceRef = useRef<HTMLInputElement>(null);
  const [replaceTarget, setReplaceTarget] = useState<PortalDocument | null>(null);

  const refresh = useCallback(() => setDocs(listDocuments()), []);
  useEffect(refresh, [refresh]);

  function handleFiles(files: FileList | null) {
    if (!files) return;
    let added = 0;
    Array.from(files).forEach((f) => {
      if (added >= 10) return;
      addDocument({ name: f.name, size: f.size, mime: f.type || "file", category });
      added += 1;
    });
    refresh();
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  }

  function startReplace(doc: PortalDocument) {
    setReplaceTarget(doc);
    // wait a tick so state settles before opening the picker
    setTimeout(() => replaceRef.current?.click(), 0);
  }

  function handleReplaceFile(file: File | undefined) {
    if (!file || !replaceTarget) {
      setReplaceTarget(null);
      return;
    }
    removeDocument(replaceTarget.id);
    addDocument({
      name: file.name,
      size: file.size,
      mime: file.type || "file",
      category: replaceTarget.category,
    });
    setReplaceTarget(null);
    refresh();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="display text-lg">Upload documents</h2>
        <p className="mt-1 text-sm text-slate-400">
          KYC, company papers, licenses, banking details — everything your onboarding needs.
          Demo mode stores file details in this browser; secure cloud storage arrives with the production backend.
        </p>
      </div>

      {/* Dropzone */}
      <PortalCard
        className={`cursor-pointer border-2 border-dashed text-center transition-colors ${
          dragOver ? "border-fx-orange/70 bg-fx-orange/5" : "border-white/15 hover:border-fx-orange/40"
        }`}
      >
        <div
          role="button"
          tabIndex={0}
          aria-label="Upload documents"
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          className="py-8"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-fx-orange/15 text-2xl text-fx-orange" aria-hidden="true">
            ⇪
          </span>
          <p className="display mt-4 text-base">
            {dragOver ? "Drop files here" : "Drag & drop files, or click to browse"}
          </p>
          <p className="mt-1 text-xs text-slate-500">PDF, images, Office docs, ZIP — up to 10 files at a time</p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept={ACCEPT}
            className="hidden"
            onChange={(e) => {
              handleFiles(e.target.files);
              e.target.value = "";
            }}
          />
        </div>
        <div className="mx-auto max-w-xs pb-2">
          <label className="mb-1.5 block text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Document category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white outline-none focus:border-fx-orange/60"
          >
            {DOC_CATEGORIES.map((c) => (
              <option key={c} value={c} className="bg-ink-900 text-white">
                {c}
              </option>
            ))}
          </select>
        </div>
      </PortalCard>

      {/* List */}
      <div>
        <h2 className="display text-lg">Your documents ({docs.length})</h2>
        <div className="mt-4 space-y-3">
          {docs.length === 0 && (
            <PortalCard>
              <p className="text-sm text-slate-400">
                Nothing uploaded yet. Add your first document above — our team reviews every file, usually within one business day.
              </p>
            </PortalCard>
          )}
          {docs.map((d) => (
            <PortalCard key={d.id} className="flex flex-wrap items-center justify-between gap-3 !p-5">
              <div className="min-w-0">
                <p className="display truncate text-[15px]">{d.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {d.category} · {formatBytes(d.size)} · {formatDate(d.uploadedAt)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <DocChip status={d.status} />
                <button
                  onClick={() => startReplace(d)}
                  aria-label={`Replace ${d.name}`}
                  title="Replace with a new file"
                  className="flex h-9 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 text-xs font-semibold text-slate-300 transition-colors hover:border-fx-orange/50 hover:text-fx-orange"
                >
                  <span aria-hidden="true">⇪</span> Replace
                </button>
                <button
                  onClick={() => {
                    removeDocument(d.id);
                    refresh();
                  }}
                  aria-label={`Delete ${d.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-red-400/50 hover:text-red-300"
                >
                  ✕
                </button>
              </div>
            </PortalCard>
          ))}
        </div>
      </div>

      {/* Hidden input for Replace */}
      <input
        ref={replaceRef}
        type="file"
        accept={ACCEPT}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
        onChange={(e) => {
          handleReplaceFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
    </div>
  );
}
