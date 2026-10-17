"use client";

import { useMemo, useState } from "react";

import { adminWaLink } from "@/lib/chatbot";
import { allServices, formatRupiah } from "@/lib/services";
import { waLink } from "@/lib/site";

export function PriceCalculator() {
  const [serviceId, setServiceId] = useState(allServices[0].id);
  const [quantity, setQuantity] = useState(1000);

  const service = useMemo(
    () => allServices.find((item) => item.id === serviceId) ?? allServices[0],
    [serviceId],
  );

  const safeQuantity = Number.isFinite(quantity) ? quantity : 0;
  const withinRange = safeQuantity >= service.min && safeQuantity <= service.max;
  const total = Math.ceil((service.pricePer1000 * safeQuantity) / 1000);

  return (
    <div className="card-surface p-7">
      <h3 className="text-lg font-bold">Kalkulator Harga</h3>
      <p className="mt-2 text-sm text-muted">
        Hitung estimasi biaya sebelum order. Harga yang tampil sudah final.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-muted">Pilih layanan</span>
          <select
            value={serviceId}
            onChange={(event) => setServiceId(event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border-soft bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
          >
            {allServices.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          <span className="text-muted">Jumlah</span>
          <input
            type="number"
            min={service.min}
            max={service.max}
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
            className="mt-1.5 w-full rounded-xl border border-border-soft bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
          />
        </label>
      </div>

      <div className="mt-6 rounded-2xl bg-surface-2 p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Total estimasi</p>
            <p className="mt-1 text-2xl font-extrabold text-brand">
              {formatRupiah(withinRange ? total : 0)}
            </p>
          </div>
          <p className="text-right text-xs text-muted">
            {formatRupiah(service.pricePer1000)} / 1.000
            <br />
            Mulai: {service.start}
          </p>
        </div>

        {!withinRange ? (
          <p className="mt-3 text-xs text-accent">
            Jumlah harus antara {service.min.toLocaleString("id-ID")} dan{" "}
            {service.max.toLocaleString("id-ID")} untuk layanan ini.
          </p>
        ) : (
          <p className="mt-3 text-xs text-muted">Garansi: {service.guarantee}</p>
        )}
      </div>

      <a
        href={
          withinRange
            ? waLink(
                `Halo NATHSMM, saya ingin order ${safeQuantity.toLocaleString("id-ID")} ${service.name}. Estimasi total ${formatRupiah(total)}. Mohon dibantu.`,
              )
            : adminWaLink
        }
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Order via WhatsApp
      </a>
    </div>
  );
}
