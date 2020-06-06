
export const mockRequest = () => {
    const req = {} as any;
    req.body = jest.fn().mockReturnValue(req)
    req.params = jest.fn().mockReturnValue(req)
    return req;
}

export const mockResponse = () => {
    const res = {} as any;
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
};

