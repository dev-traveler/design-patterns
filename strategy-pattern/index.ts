import CompressionAlgorithm from "./abstract/CompressionAlgorithm";
import RarAlgorithm from "./algorithms/RarAlgorithm";
import TarAlgorithm from "./algorithms/TarAlgorithm";
import ZipAlgorithm from "./algorithms/ZipAlgorithm";

// 압축 프로그램
class CompressionProgram {
  private algorithm: CompressionAlgorithm;

  constructor(compression: CompressionAlgorithm) {
    this.algorithm = compression;
  }

  setAlgorithm(compressionAlgorithm: CompressionAlgorithm): void {
    this.algorithm = compressionAlgorithm;
  }

  compressFiles(files: string[]): void {
    this.algorithm.compressFiles(files);
  }

  extractFiles(files: string[]): void {
    this.algorithm.extractFiles(files);
  }
}

const compressionProgram = new CompressionProgram(new ZipAlgorithm());
compressionProgram.compressFiles(["file1", "file2"]);
compressionProgram.extractFiles(["file1", "file2"]);

compressionProgram.setAlgorithm(new RarAlgorithm());
compressionProgram.compressFiles(["file1", "file2"]);
compressionProgram.extractFiles(["file1", "file2"]);

compressionProgram.setAlgorithm(new TarAlgorithm());
compressionProgram.compressFiles(["file1", "file2"]);
compressionProgram.extractFiles(["file1", "file2"]);
