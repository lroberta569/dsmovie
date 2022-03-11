package com.lroberta.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lroberta.dsmovie.entities.Score;
import com.lroberta.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
