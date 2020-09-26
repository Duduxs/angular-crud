package com.edudev.back.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edudev.back.model.Warning;
import com.edudev.back.service.WarningService;

@RestController
@RequestMapping("/warnings")
@CrossOrigin(origins = "*")
public class WarningResource {

	@Autowired
	WarningService warningService;
	
	@GetMapping
	public ResponseEntity<List<Warning>> findAll() {
		return new ResponseEntity<List<Warning>>(warningService.findAll(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Warning> save(@RequestBody Warning warning){
		return new ResponseEntity<Warning>(warningService.save(warning), HttpStatus.CREATED);
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<Void> update(@RequestBody Warning warning, @PathVariable Long id){
		warningService.update(warning, id);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping(value="/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		warningService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
