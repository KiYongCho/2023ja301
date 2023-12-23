package facade.pagemaker;

import java.io.Writer;
import java.io.IOException;

public class HtmlWriter {
    private Writer writer;
    public HtmlWriter(Writer writer) {  // �R���X�g���N�^
        this.writer = writer;
    }
    public void title(String title) throws IOException {    // �^�C�g���̏o��
        writer.write("<html>");
        writer.write("<head>");
        writer.write("<title>" + title + "</title>");
        writer.write("</head>");
        writer.write("<body>\n");
        writer.write("<h1>" + title + "</h1>\n");
    }
    public void paragraph(String msg) throws IOException {  // �i���̏o��
        writer.write("<p>" + msg + "</p>\n");
    }
    public void link(String href, String caption) throws IOException {  // �����N�̏o��
        paragraph("<a href=\"" + href + "\">" + caption + "</a>");
    }
    public void mailto(String mailaddr, String username) throws IOException {   // ���[���A�h���X�̏o��
        link("mailto:" + mailaddr, username);
    }
    public void close() throws IOException {    // ����
        writer.write("</body>");
        writer.write("</html>\n");
        writer.close();
    }
}
