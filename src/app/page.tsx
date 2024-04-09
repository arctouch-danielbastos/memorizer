import IconButton from "ui/IconButton";
import TopBar from "ui/TopBar";

export default function Memorizer() {
  return (
    <main style={{ display: "grid", width: "100%" }}>
      <TopBar
        title="Hebreus 4:14-16"
        right={<IconButton type="tonal" icon="face" />}
      />
      <div>
        <IconButton type="tonal" icon="face" />
        <IconButton type="outlined" icon="face" />
      </div>
    </main>
  );
}
