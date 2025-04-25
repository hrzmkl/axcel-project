'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white"
      style={{ zIndex: 9999 }}
    >
      <div className="text-center">
        {/* Conteneur du spinner/logo */}
        <div className="position-relative mx-auto" style={{ width: "120px", height: "120px" }}>
          {/* Spinner Bootstrap */}
          <div
            className="spinner-border text-primary w-100 h-100 position-absolute top-0 start-0"
            style={{
                width: "500px", // 👈 agrandir ici
                height: "500px",
                borderWidth: "0.3rem", // tu peux aussi augmenter ici pour un cercle plus épais
              }}
            role="status"
          >
            <span className="visually-hidden">Chargement...</span>
          </div>

          {/* Logo centré */}
          <div className="position-absolute top-50 start-50 translate-middle">
            <Image
               src="/axcel-company-logo-transparent-99-104-.png"
               alt="Axcel Company logo"
               width={80}
               height={80}
              style={{ objectFit: "contain" }}
              className="rounded"
            />
          </div>
        </div>

        {/* Texte en dessous */}
        <div className="mt-4 fw-medium text-dark">Chargement...</div>
      </div>
    </div>
  );
}
