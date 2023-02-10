package com.example.chat.repo;

import com.example.chat.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query( value = "select * from User where username = :username", nativeQuery = true)
    public User findByUsername(String username);

}
