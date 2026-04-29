"use client";

const PRIMARY = "#4B1E6D";
const BACKGROUND = "#F6F3EC";

export default function FuzionFooter() {
  return (
    <footer
      className="border-t border-black/10"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="mx-auto max-w-7xl px-6 py-6 text-center">
        <p className="text-sm font-medium" style={{ color: PRIMARY }}>
          © {new Date().getFullYear()} Fuzion Chickasaw Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}