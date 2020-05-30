import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Input,
    Label,
    CustomInput
} from 'reactstrap';
export default class UpdateLayout extends Component {
    state={
        sliders : [],
        logo: null
    }
    handleSubmit = ()=>{

    }

    handleInputsChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelFilesChange = async (e,type) =>{
        let {sliders} = this.state;
        if(e.target.files&&e.target.files[0]){
            let slidersReader = new FileReader();
            let logoReader = new FileReader();
            let file = e.target.files[0];
            if(type === 'slider'){
                //flter
                let isSelected =  sliders.find(v=> v.file.name === file.name)
                if(!isSelected){
                    slidersReader.onload = (loaded)=>{
                        this.setState({
                            sliders: [...this.state.sliders,{
                                file: file,
                                preview: loaded.target.result
                            }]
                        })
                    }
                    slidersReader.readAsDataURL(file);
                }
            }else{
                logoReader.onload = (loaded)=>{
                    this.setState({
                        logo: {
                            file: file,
                            preview: loaded.target.result
                        }
                    })
                }
                logoReader.readAsDataURL(file);
            }
        }
    }
    render() {
        console.log(this.state);

        return (
            <Row className="justify-content-center">
                <Col md="8" lg="6" xl="5">
                    <Card className="bg-pattern shadow-none">
                        <CardBody>
                            <div className="p-3">
                            <h4 className="font-18 text-center"> Update Layout </h4>
                                <Form className="form-horizontal" onSubmit={this.handleSubmit}>

                                    <FormGroup>
                                        <Label for="Title">Title</Label>
                                        <Input type="text" name="title" id="Title" placeholder="Title" onChange={this.handleInputsChange}/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="title-color">Title Color</Label>
                                        <Input type="color" name="title_color" id="title-color" onChange={this.handleInputsChange}/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="title-background-color">Title Background Color</Label>
                                        <Input type="color" name="title_bg_color" id="title-background-color" onChange={this.handleInputsChange}/>
                                    </FormGroup>

                                    <FormGroup className="upload-btn">
                                        <Label for="logo" className="btn btn-secondary">Upload Logo</Label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            name="file"
                                            id="logo"
                                            onChange={this.handelFilesChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCheckbox">Logo Style</Label>
                                        <div>
                                            <CustomInput
                                                type="radio"
                                                id="square"
                                                name="logo_style"
                                                label="Square"
                                                onChange={this.handleInputsChange}
                                                value="square"
                                            />
                                            <CustomInput
                                                type="radio"
                                                id="flexible"
                                                name="logo_style"
                                                label="flexible Width"
                                                onChange={this.handleInputsChange}
                                                value="flexible"
                                            />
                                            <CustomInput
                                                type="radio"
                                                id="rounded"
                                                name="logo_style"
                                                label="Rounded"
                                                onChange={this.handleInputsChange}
                                                value="rounded"
                                            />
                                        </div>
                                    </FormGroup>
                                    <Row>
                                        {this.state.logo&&
                                            <Col md='3' className="m-1" >
                                                <img className="preview" src={this.state.logo.preview} alt=""/>
                                            </Col>
                                        }
                                    </Row>
                                    <FormGroup className="upload-btn mt-4">
                                        <Label for="slides" className="btn btn-secondary">+ Add Slider Image</Label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            name="file"
                                            id="slides"
                                            onChange={(e)=>this.handelFilesChange(e,"slider")}
                                        />
                                    </FormGroup>
                                    <Row>
                                        {this.state.sliders.map((file,idx)=>
                                            <Col md='3' className="m-1" key={idx}>
                                                <img className="preview" src={file.preview} alt=""/>
                                            </Col>
                                        )}
                                    </Row>
                                    <div className="mt-3">
                                        <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">
                                        Login
                                        </button>
                                    </div>
                                    <style jsx>
                                        {`
                                            .preview{
                                                width: 150px;
                                                height: 130px;
                                            }
                                        `}
                                    </style>
                                </Form>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
        </Row>
        )
    }
}
