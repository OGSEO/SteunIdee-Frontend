import axios from "axios";

export default class ApiService {

    static BASE_URL = "http://localhost:8080";

    static getHeader() {
        const token = localStorage.getItem("JWT_TOKEN");
        return {
            Authorization: `Bearer ${token}`
        };
    }

    /** AUTH API */

    static async registerUser(registration) {
        const response = await axios.post(
            `${this.BASE_URL}/auth/register`, registration)
        return response.data;
    }

    static async loginUser(loginDetails) {
        const response = await axios.post(
            `${this.BASE_URL}/auth/login`, loginDetails)
        return response.data;
    }

    /** USER API */

    static async getLoggedUser() {
        const response = await axios.get(
            `${this.BASE_URL}/user/my-info`, {
                headers: this.getHeader()
            })
        return response.data;
    }

    /** POLITICAL PARTY API */

    static async createPoliticalParty(formData) {
        const response = await axios.post(
            `${this.BASE_URL}/political-party/create`, formData, {
                headers: this.getHeader()
            })
        return response.data;
    }

    static async getAllPoliticalParties() {
        const response = await axios.get(
            `${this.BASE_URL}/political-party/get-all`)
        return response.data;
    }

    static async getPoliticalPartyById() {
        const response = await axios.get(
            `${this.BASE_URL}/political-party/get-political-party-by-id`)
        return response.data;
    }

    static async updatePoliticalParty(politicalPartyId, formData) {
        const response = await axios.put(
            `${this.BASE_URL}/political-party/get-political-party-by-id/${politicalPartyId}`, formData,{
                headers: this.getHeader()
            })
        return response.data;
    }

    static async deletePoliticalParty(politicalPartyId) {
        const response = await axios.delete(
            `${this.BASE_URL}/political-party/get-political-party-by-id/${politicalPartyId}`,{
                headers: this.getHeader()
            })
        return response.data;
    }

    /** IDEA API */

    static async createIdea(formData) {
        const response = await axios.post(
            `${this.BASE_URL}/idea/create`, formData, {
                headers: this.getHeader()
            })
        return response.data;
    }

    static async getAllIdeas() {
        const response = await axios.get(
            `${this.BASE_URL}/idea/get-all`)
        return response.data;
    }

    static async getIdeaById() {
        const response = await axios.get(
            `${this.BASE_URL}/idea/get-idea-by-id`)
        return response.data;
    }

    static async updateIdea(ideaId, formData) {
        const response = await axios.put(
            `${this.BASE_URL}/idea/get-idea-by-id/${ideaId}`, formData,{
                headers: this.getHeader()
            })
        return response.data;
    }

    static async deleteIdea(ideaId) {
        const response = await axios.delete(
            `${this.BASE_URL}/idea/get-idea-by-id/${ideaId}`,{
                headers: this.getHeader()
            })
        return response.data;
    }

    /** COMMENT API */

    static async createComment(formData) {
        const response = await axios.post(
            `${this.BASE_URL}/comment/create`, formData, {
                headers: this.getHeader()
            })
        return response.data;
    }

    static async getAllComments() {
        const response = await axios.get(
            `${this.BASE_URL}/comment/get-all`)
        return response.data;
    }

    static async getCommentById() {
        const response = await axios.get(
            `${this.BASE_URL}/comment/get-comment-by-id`)
        return response.data;
    }

    static async updateComment(commentId, formData) {
        const response = await axios.put(
            `${this.BASE_URL}/comment/get-comment-by-id/${commentId}`, formData,{
                headers: this.getHeader()
            })
        return response.data;
    }

    static async deleteComment(commentId) {
        const response = await axios.delete(
            `${this.BASE_URL}/comment/get-comment-by-id/${commentId}`,{
                headers: this.getHeader()
            })
        return response.data;
    }

    /** ADDRESS API */

    static async saveAddress(formData) {
        const response = await axios.post(
            `${this.BASE_URL}/address/save`, formData, {
                headers: this.getHeader()
            })
        return response.data;
    }

    /** AUTH CHECKER */

    static logout() {
        localStorage.removeItem("JWT_TOKEN")
        localStorage.removeItem("ROLE")
    }

    static isAutheticated() {
        const token = localStorage.getItem("JWT_TOKEN")
        return !!token
    }

    static isPolitician() {
        const role = localStorage.getItem("ROLE")
        return role === 'POLITICIAN'
    }

}