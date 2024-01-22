package world.grendel.userlogindemo.dataobjects;

import jakarta.validation.constraints.NotEmpty;

/**
 * UserLoginDTO
 */
public class UserLoginDTO {
    @NotEmpty(message = "Username is required")
    private String username;
    @NotEmpty(message = "Password is required")
    private String password;

    public UserLoginDTO() {
    }

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
