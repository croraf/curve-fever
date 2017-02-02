package org.evedraf.examples.spring.validation;


import org.evedraf.examples.spring.model.Player;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

public class MyPlayerValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {

        if (clazz.equals(Player.class)) {
            return true;
        } else {
            return false;
        }

    }

    @Override
    public void validate(Object target, Errors e) {

        ValidationUtils.rejectIfEmpty(e, "id", "id.empty");
        Player p = (Player) target;
        if (p.getId() < 1) {
            e.rejectValue("id", "too.low.id");
        } else if (p.getId() > 2) {
            e.rejectValue("id", "too.big.id");
        }
    }
}
