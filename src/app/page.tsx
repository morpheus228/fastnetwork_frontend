"use client";
import Index from './components/home'
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading && (
        <main>
          <Index />
        </main>
      )}
    </>
  )
}
