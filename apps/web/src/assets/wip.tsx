import { themeVars } from "@repo/ui/styles";

export function WIP() {
  return (
    <div
      style={{
        backgroundColor: themeVars.color.background,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center", color: themeVars.color.text }}>
        yyoooonn
      </h1>
      <div
        style={{
          textAlign: "center",
          color: themeVars.color.secondary,
        }}
      >
        work in progress
      </div>
    </div>
  );
}
