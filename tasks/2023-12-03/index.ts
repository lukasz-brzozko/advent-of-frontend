export type Lokalizacja = {
  x: number;
  y: number;
  z: number;
  czas: number;
};

export type MapaCzasoprzestrzenna = (
  x: number,
  y: number,
  z: number,
  czas: number
) => number;

export function znajdzWorek(
  lokalizacje: Lokalizacja[],
  mapa: MapaCzasoprzestrzenna
): Lokalizacja | null {
  if (lokalizacje.length === 0) return null;

  const wynikiMap = lokalizacje.map(({ x, y, z, czas }) => mapa(x, y, z, czas));
  const posiadaNiepoprawneWyniki = wynikiMap.includes(NaN);

  if (posiadaNiepoprawneWyniki) return null;

  const najwyższaWartość = Math.max(...wynikiMap);
  const indexMapyZNajwyższymWynikiem = wynikiMap.findIndex(
    (wynik) => wynik === najwyższaWartość
  );

  return lokalizacje[indexMapyZNajwyższymWynikiem];
}
