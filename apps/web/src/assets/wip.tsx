import { theme } from "@repo/ui/styles";

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
      <h1 style={{ textAlign: "center", color: theme.color.light.primary }}>
        yyoooonn
      </h1>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        work in progress
      </h1>
    </div>
  );
}
