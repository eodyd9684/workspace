package com.green.react_shop.dto;

import lombok.Getter;
import lombok.ToString;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Getter
@Service
@ToString
public class EmpDTO {
  private int empno;
  private String ename;
  private String job;
  private int mgr;
  private LocalDateTime hiredate;
  private int sal;
  private int comm;
  private int deptno;
  private DeptDTO deptDTO;
}
