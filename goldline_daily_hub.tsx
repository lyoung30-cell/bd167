/**
 * FuelTrack GitHub Pages companion file.
 * The deployed, working app is index.html; GitHub Pages does not compile TSX.
 * This lightweight React entry is included to match the requested repository file set.
 */
import React from "react";

export default function FuelTrackApp() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b0d11", color: "#f5f6f8", padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ color: "#e0b84e" }}>FuelTrack</h1>
      <p>Food · School · Sports</p>
      <p>The complete standalone app is served by <code>index.html</code>.</p>
    </main>
  );
}
