package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.RoundLogic;
import org.evedraf.examples.spring.business.Position;
import org.evedraf.examples.spring.business.UpdateMessageFromClient;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * Created by Korisnik on 12.1.2017..
 */
@Controller
@RequestMapping("/roundUpdate")
public class UpdateController {

    @Autowired
    private RoundLogic roundLogic;




}
