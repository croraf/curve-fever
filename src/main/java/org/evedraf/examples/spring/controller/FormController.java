package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.model.Message;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class FormController {

    @RequestMapping(value = "/form1")
    public String getForm (){

        return "/playerUpdateForm.jsp";
    }

    @RequestMapping(value = "/form1_submit2")
    public String test (HttpServletRequest request, @ModelAttribute Message message){

        HttpSession session = request.getSession();
        session.setMaxInactiveInterval(-1);

        //"Session id: " + session.getId() + ", last accessed: " + new Date(session.getLastAccessedTime());
        return "/playerUpdateSuccess.jsp";
    }
}
