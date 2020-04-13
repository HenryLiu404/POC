package com.dig.project.userCRUD;

import java.util.List;

import com.dig.project.userCRUD.User;

public interface UserDao {
    public void addUser(User user);
    public List<User> getUser();
    public User findById(int id);
    public User update(User user, int id);
    public User updateState(User user, int id);
    public void delete(int id);
}