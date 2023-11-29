package edu.java.thread;

public class CinemaPerson {

	private String name;
	private Seat reservationSeat;

	public CinemaPerson() {
	}

	public CinemaPerson(String name, Seat reservationSeat) {
		super();
		this.name = name;
		this.reservationSeat = reservationSeat;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Seat getReservationSeat() {
		return reservationSeat;
	}

	public void setReservationSeat(Seat reservationSeat) {
		this.reservationSeat = reservationSeat;
	}

	@Override
	public String toString() {
		return "CinemaPerson [name=" + name + ", reservationSeat=" + reservationSeat + "]";
	}

}
