export const signup = async (req, res) => {
  res.json({
    data: "Hey from signup endpoint"
  })
};

export const login = async (req, res) => {
  res.json({
    data: "Hey from login endpoint"
  })
};

export const logout = async (req, res) => {
  res.json({
    data: "Hey from logout endpoint"
  })
};

export const getme = async (req, res) => {
  res.json({
    data: "Hey from getme endpoint"
  });
};
