import { designTheme } from "@/styles/theme.css";

export function WIP() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{ fontFamily: designTheme.fontFamily.bold, textAlign: "center" }}
      >
        yyoooonn
      </h1>
      <h1
        style={{
          fontFamily: designTheme.fontFamily.regular,
          textAlign: "center",
        }}
      >
        work in progress
      </h1>
    </div>
  );
}
