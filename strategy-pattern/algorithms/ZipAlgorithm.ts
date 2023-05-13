// zip 알고리즘을 구현한 클래스
import CompressionAlgorithm from "../abstract/CompressionAlgorithm";

export default class ZipAlgorithm extends CompressionAlgorithm {
  compressFiles(files: string[]): void {
    console.log("zip 압축");
  }
  extractFiles(files: string[]): void {
    console.log("zip 압축 해제");
  }
}
