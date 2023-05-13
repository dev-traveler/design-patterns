import CompressionAlgorithm from "./abstract/CompressionAlgorithm";

export default class CompressionProgram {
  private algorightm: CompressionAlgorithm;

  constructor(compression: CompressionAlgorithm) {
    this.algorightm = compression;
  }

  setAlgorithm(compressionAlgorithm: CompressionAlgorithm): void {
    this.algorightm = compressionAlgorithm;
  }

  compressFiles(files: string[]): void {
    this.algorightm.compressFiles(files);
  }

  extractFiles(files: string[]): void {
    this.algorightm.extractFiles(files);
  }
}
