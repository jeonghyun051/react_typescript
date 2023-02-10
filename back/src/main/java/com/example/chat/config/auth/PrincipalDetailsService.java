package com.example.chat.config.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.chat.model.User;
import com.example.chat.repo.UserRepository;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@Service
public class PrincipalDetailsService implements UserDetailsService {


    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("PrincipalDetailsService is Run");
        User userEntity = userRepository.findByUsername(username);
        System.out.println("userEntity:"+userEntity);

        if(userEntity == null) {
            System.out.println("123");
            throw new UsernameNotFoundException("usernameNotFound");
        }
        return new PrincipalDetails(userEntity);
    }

}