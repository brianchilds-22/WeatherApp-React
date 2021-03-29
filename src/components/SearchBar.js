import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const SearchBar = ({ searchTerm, handleFormSubmit, handleInputChange }) => {
    return (
        <Form inline onSubmit={handleFormSubmit}>
            <FormGroup>
                <Label for="location" hidden>Location</Label>
                <Input 
                type="text" 
                name="location" 
                id="location" 
                placeholder="Denver, CO" 
                onChange={handleInputChange}
                value={searchTerm}
                />
            </FormGroup>
            <Button>Search</Button>
        </Form>
    )
}
export default SearchBar;