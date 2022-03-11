package com.lroberta.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lroberta.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
