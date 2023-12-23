package edu.java.thread;

public class Seat {

	private String seatNo;
	private boolean reservationYN;

	public Seat() {
	}

	public Seat(String seatNo, boolean reservationYN) {
		super();
		this.seatNo = seatNo;
		this.reservationYN = reservationYN;
	}

	public String getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(String seatNo) {
		this.seatNo = seatNo;
	}

	public boolean isReservationYN() {
		return reservationYN;
	}

	public void setReservationYN(boolean reservationYN) {
		this.reservationYN = reservationYN;
	}

	@Override
	public String toString() {
		return "Seat [seatNo=" + seatNo + ", reservationYN=" + reservationYN + "]";
	}

}
