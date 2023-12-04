public class IncrementalNumberGenerator extends NumberGenerator {
    private int number;                     // Œ»İ‚Ì”
    private int end;                        // I—¹’l(‚±‚Ì’l‚ğŠÜ‚Ü‚È‚¢)
    private int inc;                        // ‘‰Á•ª
    public IncrementalNumberGenerator(int start, int end, int inc) {
        this.number = start;
        this.end = end;
        this.inc = inc;
    }
    public int getNumber() {                // ”‚ğæ“¾‚·‚é
        return number;
    }
    public void execute() {
        while (number < end) {
            notifyObservers();
            number += inc;
        }
    }
}
