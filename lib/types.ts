export interface AliasPlayer {
  id: string;
  name: string;
  isConnected: boolean;
  isHost?: boolean;
  joinedAt?: number;
  teamId: 'a' | 'b' | null;
}

export interface AliasSettings {
  roundDuration: 30 | 60 | 90;
  targetScore: number;
}

export type AliasStatus =
  | 'lobby'
  | 'roundStart'
  | 'explaining'
  | 'roundEnd'
  | 'scoreboard'
  | 'finished';

export interface WordResult {
  word: string;
  result: 'correct' | 'wrong' | 'skipped';
}

export interface AliasRoom {
  code: string;
  status: AliasStatus;
  hostId: string;
  players: AliasPlayer[];
  settings: AliasSettings;
  teams: { a: string[]; b: string[] };
  scores: { a: number; b: number };
  currentTeam: 'a' | 'b';
  currentExplainerIndex: { a: number; b: number };
  currentWord: string | null;
  wordsQueue: string[];
  roundResults: WordResult[];
  round: number;
  roundEndTime: number | null;
  createdAt: number;
}
