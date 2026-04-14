export function generateUsername() {
  const names = ["HiddenSoul", "QuietMind", "LostStar"];
  return names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 1000);
}