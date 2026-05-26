import { shuffleArray } from '../utils';

const ALL_WORDS: string[] = [
  'putnik', 'korida', 'kabina', 'vijugav', 'kompjuter',
  'drhtati', 'šimpanza', 'trajekt', 'bubuljica', 'značka',
];

export function getRandomWords(count: number): string[] {
  const shuffled = shuffleArray(ALL_WORDS);
  const result: string[] = [];
  while (result.length < count) {
    result.push(...shuffled);
  }
  return result.slice(0, count);
}
