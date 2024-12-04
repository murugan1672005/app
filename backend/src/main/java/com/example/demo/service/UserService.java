package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Users;
import com.example.demo.repository.UsersRepo;
import org.springframework.security.core.authority.AuthorityUtils;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UsersRepo usersRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Find the user by email
        Users user = usersRepo.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Assuming your User entity has fields for email, password, and roles
        // Wrap your User object in a UserDetails implementation (e.g., org.springframework.security.core.userdetails.User)
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),         // Username (email)
                user.getPassword(),      // Password
                AuthorityUtils.createAuthorityList(user.getRole())  // User's roles
        );
    }
}
