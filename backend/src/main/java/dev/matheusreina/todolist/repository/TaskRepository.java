package dev.matheusreina.todolist.repository;

import dev.matheusreina.todolist.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
