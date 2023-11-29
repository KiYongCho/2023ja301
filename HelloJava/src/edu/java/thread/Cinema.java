package edu.java.thread;

import java.util.List;

public class Cinema {

	private List<Room> roomList;

	public Cinema() {
	}

	public Cinema(List<Room> roomList) {
		super();
		this.roomList = roomList;
	}

	public List<Room> getRoomList() {
		return roomList;
	}

	public void setRoomList(List<Room> roomList) {
		this.roomList = roomList;
	}

	@Override
	public String toString() {
		return "Cinema [roomList=" + roomList + "]";
	}

}
