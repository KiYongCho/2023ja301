package edu.java.thread;

import java.util.List;

public class Room {

	private String roomName;
	private List<Seat> seatList;

	public Room() {
	}

	public Room(String roomName, List<Seat> seatList) {
		super();
		this.roomName = roomName;
		this.seatList = seatList;
	}

	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	public List<Seat> getSeatList() {
		return seatList;
	}

	public void setSeatList(List<Seat> seatList) {
		this.seatList = seatList;
	}

	@Override
	public String toString() {
		return "Room [roomName=" + roomName + ", seatList=" + seatList + "]";
	}

}
