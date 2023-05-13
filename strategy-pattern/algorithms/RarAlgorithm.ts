import CompressionAlgorithm from "../abstract/CompressionAlgorithm";

// rar 알고리즘을 구현한 클래스
export default class RarAlgorithm extends CompressionAlgorithm {
  compressFiles(files: string[]): void {
    console.log("rar 압축");
  }
  extractFiles(files: string[]): void {
    console.log("rar 압축 해제");
  }
}
