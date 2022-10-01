export type TypeAnimeList = {
  animeId?: string;
  animeTitle?: string;
  animeUrl?: string;
  animeImg?: string;
  status?: string;
};

export type TypeEpisode = {
  episodeId?: string;
  episodeNum?: number | string;
  episodeUrl?: string;
};


export type TypeAnime = {
  animeId?: string;
  type?: string;
  animeTitle?: string;
  animeImg?: string;
  status?: string;
  genres?: Genre[];
  otherNames?: string[] | string;
  synopsis?: string;
  totalEpisodes?: number | string;
  episodesList?: TypeEpisode[];
};

export const URL = "https://gogoanime.herokuapp.com"

type Genre = 'action' | 'adventure'
  | 'cars' | 'comedy'
  | 'crime' | 'dementia'
  | 'demons' | 'drama'
  | 'dub' | 'ecchi'
  | 'family' | 'fantasy'
  | 'game' | 'gourmet'
  | 'harem' | 'historical'
  | 'horror' | 'josei'
  | 'kids' | 'magic'
  | 'martial-arts' | 'mecha'
  | 'military' | 'Mmusic'
  | 'mystery' | 'parody'
  | 'police' | 'psychological'
  | 'romance' | 'samurai'
  | 'school' | 'sci-fi'
  | 'seinen' | 'shoujo'
  | 'shoujo-ai' | 'shounen'
  | 'shounen-ai' | 'slice-of-Life'
  | 'space' | 'sports'
  | 'super-power' | 'supernatural'
  | 'suspense' | 'thriller'
  | 'vampire' | 'yaoi'
  | 'yuri';

export enum Genres {
  // get value from Genre variable
  action = 'action',
  adventure = 'adventure',
  cars = 'cars',
  comedy = 'comedy',
  crime = 'crime',
  dementia = 'dementia',
  demons = 'demons',
  drama = 'drama',
  dub = 'dub',
  ecchi = 'ecchi',
  family = 'family',
  fantasy = 'fantasy',
  game = 'game',
  gourmet = 'gourmet',
  harem = 'harem',
  historical = 'historical',
  horror = 'horror',
  josei = 'josei',
  kids = 'kids',
  magic = 'magic',
  martialArts = 'martial-arts',
  mecha = 'mecha',
  military = 'military',
  Mmusic = 'Mmusic',
  mystery = 'mystery',
  parody = 'parody',
  police = 'police',
  psychological = 'psychological',
  romance = 'romance',
  samurai = 'samurai',
  school = 'school',
  sciFi = 'sci-fi',
  seinen = 'seinen',
  shoujo = 'shoujo',
  shoujoAi = 'shoujo-ai',
  shounen = 'shounen',
  shounenAi = 'shounen-ai',
  sliceOfLife = 'slice-of-Life',
  space = 'space',
  sports = 'sports',
  superPower = 'super-power',
  supernatural = 'supernatural',
  suspense = 'suspense',
  thriller = 'thriller',
  vampire = 'vampire',
  yaoi = 'yaoi',
  yuri = 'yuri',
}
