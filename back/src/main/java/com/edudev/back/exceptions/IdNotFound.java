package com.edudev.back.exceptions;

public class IdNotFound extends RuntimeException {

	 static final long serialVersionUID = -6246062935051569344L;

	 public IdNotFound(String msg ) {
		 super(msg);
	 }
}
