package servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "GetNameServlet")
public class GetNameServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("name");
        if (name.length() > 100) {
            name = name.substring(0, 99);
        }
        PrintWriter printWriter = response.getWriter();
        printWriter.println("<html>");
        printWriter.println("<h1>Name is " + name + "</h1>");
        printWriter.println("</html>");
    }
}
