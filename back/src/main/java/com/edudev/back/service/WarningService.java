package com.edudev.back.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edudev.back.exceptions.IdNotFound;
import com.edudev.back.model.Warning;
import com.edudev.back.repository.WarningRepository;

@Service
public class WarningService {

	@Autowired
	private WarningRepository warningRepository;
	
	public Warning findById(Long id) {
		Optional<Warning> warning = warningRepository.findById(id);
		return warning.orElseThrow(() -> new IdNotFound("Id not found"));
	}
	
	public List<Warning> findAll(){
		return warningRepository.findAll();
	}
	
	public Warning save(Warning warning) {
		warning.setPublicationDate(LocalDateTime.now());
		return warningRepository.save(warning);
	}
	
	public void update(Warning warning, Long id) {
		Warning w = findById(id);
		w.setTitle(warning.getTitle());
		w.setDescription(warning.getDescription());
		warningRepository.save(w);
	}
	
	public void delete(Long id) {
		Warning w = findById(id);
		warningRepository.delete(w);
	}
}
