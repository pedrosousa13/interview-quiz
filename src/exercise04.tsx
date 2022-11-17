// There's a case here where initializeAudio, what is it and how can you fix it?

interface VolumeStorage {
  volume?: number;
}

export const initializeAudio = ({volume}: VolumeStorage) => {
  return volume || 0.5;
}

initializeAudio({volume: 3})