import React from 'react'
import { Avatar, Menu } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import './ProfileMenu.css'

const ProfileMenu = ({ user, logout }) => {
    const navigate = useNavigate()
    return (
        <Menu>
            <Menu.Target>
                <Avatar
                    src={user?.picture}
                    alt={user?.name}
                    size={40}
                    radius="xl"
                />
            </Menu.Target>

            <Menu.Dropdown className="profile-dropdown">
                <Menu.Item className="profile-item" onClick={() => navigate("./favourites", { replace: true })}>
                    Favourites
                </Menu.Item>

                <Menu.Item className="profile-item" onClick={() => navigate("./bookings", { replace: true })}>
                    Bookings
                </Menu.Item>

                <Menu.Item className="profile-item logout-item" onClick={() => {
                    localStorage.clear()
                    logout()
                }}>
                    Logout
                </Menu.Item>

            </Menu.Dropdown>
        </Menu>
    )
}

export default ProfileMenu