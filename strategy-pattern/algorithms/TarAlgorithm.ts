import CompressionAlgorithm from "../abstract/CompressionAlgorithm";

// tar 알고리즘을 구현한 클래스
export default class TarAlgorithm extends CompressionAlgorithm {
  compressFiles(files: string[]): void {
    console.log("tar 압축");
  }
  extractFiles(files: string[]): void {
    console.log("tar 압축 해제");
  }
}
