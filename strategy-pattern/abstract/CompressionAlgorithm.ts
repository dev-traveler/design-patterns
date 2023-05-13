// 압축 알고리즘 추상화 클래스
export default abstract class CompressionAlgorithm {
  abstract compressFiles(files: string[]): void;
  abstract extractFiles(files: string[]): void;
}
