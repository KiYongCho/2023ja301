/*
 * Transaction : 작업 단위(묶음), 트랜잭션은 commit전까지가 하나의 트랜잭션
 * Commit : 데이터베이스에 Transaction작업을 반영
 *   1. DDL(create, alter, drop, truncate ...) : 수행 즉시 커밋됨 (RollBack 불가)
 *   2. DML(select, insert, update, delete, merge ....)
 *       : 커밋하기 전까지는 트랜잭션이 완료되지 않음 (데이터베이스에 반영되지 않음) 
 * Rollback : 현재 Transaction을 초기화 (데이터베이스에 작업을 반영하지 않음)
 * Auto Commit : SQL구문을 수행할때마다 즉시 커밋 (DML이라고 해도)
 * 
 * 데이터베이스 트랜잭션 처리 순서
 * 1) conn.setAutoCommit(false); : 오토커밋 방지
 * 2) DML 구문들을 작성/수행시킴, 필요하면 SavePoint 지정
 * 3) 문제가 없으면 Commit, 문제가 있으면 Rollback
 */

package board;

public class BoardTest7 {

}
