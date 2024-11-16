package com.hexaware.web.RoadReady.Service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.web.RoadReady.DTO.ReservationDTO;
import com.hexaware.web.RoadReady.Entity.Reservation;
import com.hexaware.web.RoadReady.Exception.ReservationNotFoundException;
import com.hexaware.web.RoadReady.Repository.ReservationRepository;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private ModelMapper modelMapper;

    public ReservationDTO saveReservation(ReservationDTO reservationDTO) {
        Reservation reservation = modelMapper.map(reservationDTO, Reservation.class);
        Reservation savedReservation = reservationRepository.save(reservation);
        return modelMapper.map(savedReservation, ReservationDTO.class);
    }

    public ReservationDTO getReservationById(int reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ReservationNotFoundException("Reservation with ID " + reservationId + " not found."));
        return modelMapper.map(reservation, ReservationDTO.class);
    }

    public ReservationDTO updateReservation(int reservationId, ReservationDTO reservationDTO) {
        Reservation existingReservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ReservationNotFoundException("Reservation with ID " + reservationId + " not found."));
        modelMapper.map(reservationDTO, existingReservation);
        Reservation updatedReservation = reservationRepository.save(existingReservation);
        return modelMapper.map(updatedReservation, ReservationDTO.class);
    }

    public void deleteReservation(int reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ReservationNotFoundException("Reservation with ID " + reservationId + " not found."));
        reservationRepository.delete(reservation);
    }
}
